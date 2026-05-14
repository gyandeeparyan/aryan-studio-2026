/**
 * useGeolocation Hook
 * Fetches user's current location and resolves it to a place name
 * Uses browser Geolocation API and reverse geocoding service
 * Gracefully handles permission denial and errors
 */

"use client";

import { useEffect, useState } from "react";

export function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    placeName: null,
    city: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: "Geolocation not supported",
      }));
      return;
    }

    const handleSuccess = async (position) => {
      if (!isMounted) return;

      const { latitude, longitude } = position.coords;

      try {
        // Use Open Street Map's Nominatim for reverse geocoding
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );

        if (!isMounted) return;

        const data = await response.json();
        const placeName = data.address?.city || data.address?.town || data.address?.village || "Your Location";
        const city = data.address?.city || data.address?.state || "India";

        setLocation({
          latitude,
          longitude,
          placeName,
          city,
          loading: false,
          error: null,
        });
      } catch (err) {
        if (isMounted) {
          // Silently fail for reverse geocoding, we have coordinates
          setLocation((prev) => ({
            ...prev,
            latitude,
            longitude,
            loading: false,
            error: null,
          }));
        }
      }
    };

    const handleError = (error) => {
      if (!isMounted) return;

      // Silently handle permission denied and other errors
      // Only log in development
      if (process.env.NODE_ENV === "development" && error.code !== 1) {
        console.warn("Geolocation error code:", error.code, "message:", error.message);
      }

      // Set loading to false and use fallback location
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: null, // Don't show error to user, use fallback
      }));
    };

    // Start geolocation request
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      timeout: 10000,
      enableHighAccuracy: false,
      maximumAge: 300000, // Cache for 5 minutes
    });

    // Cleanup timeout
    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return location;
}
