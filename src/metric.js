export default function Graph({ data }) {
  return (
    <div class="space-y-4 mt-4">
      <div
        class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none"
        style={{ animationDelay: "0s" }}
      >
        <div class="flex-1">
          <div
            class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
            style={{ width: "80%" }}
          ></div>{" "}
          <p>your</p>
        </div>{" "}
        <p class="pl-2">0.050</p>{" "}
      </div>
      <div
        class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none"
        style={{ animationDelay: "0.04s" }}
      >
        <div class="flex-1">
          <div
            class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
            style={{ width: "32%" }}
          ></div>{" "}
          <p>##in</p>
        </div>{" "}
        <p class="pl-2">0.020</p>{" "}
      </div>
      <div
        class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none"
        style={{ animationDelay: "0.08s" }}
      >
        <div class="flex-1">
          <div
            class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
            style={{ width: "30%" }}
          ></div>{" "}
          <p>my</p>
        </div>{" "}
        <p class="pl-2">0.019</p>{" "}
      </div>
      <div
        class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none"
        style={{ animationDelay: "0.12s" }}
      >
        <div class="flex-1">
          <div
            class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
            style={{ width: "28%" }}
          ></div>{" "}
          <p>##ered</p>
        </div>{" "}
        <p class="pl-2">0.017</p>{" "}
      </div>
      <div
        class="flex items-start justify-between font-mono text-xs animate__animated animate__fadeIn leading-none"
        style={{ animationDelay: "0.16s" }}
      >
        <div class="flex-1">
          <div
            class="h-1 mb-1 rounded bg-gradient-to-r from-purple-400 to-purple-200"
            style={{ width: "27%" }}
          ></div>{" "}
          <p>bloody</p>
        </div>{" "}
        <p class="pl-2">0.017</p>{" "}
      </div>
    </div>
  );
}
