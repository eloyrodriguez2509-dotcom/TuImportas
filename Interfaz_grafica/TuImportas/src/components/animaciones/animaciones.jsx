import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function animaciones({ src, className, loop = false }) {
  return (
    <div className={className} aria-hidden="true">
      <DotLottieReact src={src} loop={loop} autoplay />
    </div>
  );
}

export default animaciones;
