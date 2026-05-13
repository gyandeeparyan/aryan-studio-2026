/**
 * useGeolocation Hook
 * Fetches user's current location and resolves it to a place name
 * Uses browser Geolocation API and reverse geocoding service
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
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: "Geolocation not supported",
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
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
          console.error("Reverse geocoding error:", err);
          setLocation((prev) => ({
            ...prev,
            latitude,
            longitude,
            loading: false,
            error: "Could not fetch location name",
          }));
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocation((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      },
      {
        timeout: 5000,
        enableHighAccuracy: false,
      }
    );
  }, []);

  return location;
}
