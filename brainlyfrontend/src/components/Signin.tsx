import { useRef } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./icon/CloseIcon";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "./Config";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { AnimatedBackground } from "./AnimateBackground";
import BrainBackground from "./BrainBackground";
import { Exit } from "./icon/exit";
import Hyperspeed from "./Hyperspeed";
import BlurText from "./BlurText";
export function Signin() {
  const navigate = useNavigate();
  const usernameref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  async function signin() {
    const username = usernameref.current?.value;
    const password = passwordref.current?.value;

    const response = await axios.post(BACKEND_URL + "api/v1/login", {
      username,
      password,
    });

    const token = response.data.token;
    if (!token) {
      alert("Login failed");
      return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("username", username || "");
    navigate("/dashboard");
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* Signin card */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="w-full max-w-sm backdrop-blur-md bg-white/60 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Welcome back
          </h2>

          <div className="flex flex-col justify-center items-center text-gray-600 mb-4">
            <p className="text-sm text-color-gray-500">
              Save links and access them anywhere anytime.
            </p>
            <p className="text-sm text-color-gray"></p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div>
              <Input
                type="text"
                size="sm"
                className="rounded bg-gray-200"
                placeholder="username"
                ref={usernameref}
              />
              <Input
                type="password"
                size="sm"
                className="rounded bg-gray-200"
                placeholder="password"
                ref={passwordref}
              />
            </div>

            <Button onclick={signin} type="primary" size="md" text="Sign in" />

            <Button
              onclick={() => navigate("/signup")}
              type="secondary"
              size="md"
              text="Create an account"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
