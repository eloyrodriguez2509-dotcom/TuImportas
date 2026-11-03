import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function animaciones ({src, className}){
    return (
        <div className={className} aria-hidden="true">
            <DotLottieReact src={src} autoplay />
        </div>
    )
}

export default animaciones;