<template>
    <svg>
        <g>
            <path d="M 50,100 A 1,1 0 0 1 50,0" />
        </g>
        <g>
            <path d="M 50,75 A 1,1 0 0 0 50,-25" />
        </g>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF385C;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
            </linearGradient>
        </defs>
    </svg>
</template>

<script>
export default {
    name: 'LoaderComp',
}
</script>

<style lang="scss" scoped>
$transition-duration: 2s;
$path-length: 157px; // Retrieved using SVG's getTotalLength()

html,
body {
    width: 100%;
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
}

svg {
    overflow: visible;
    width: 100px;
    height: 150px;

    g {
        animation: slide $transition-duration linear infinite;

        &:nth-child(2) {
            animation-delay: $transition-duration / 4;

            path {
                animation-delay: $transition-duration / 4;
                stroke-dasharray: 0px $path-length + 1;
                stroke-dashoffset: 1px;
            }
        }
    }

    path {
        stroke: url(#gradient);
        stroke-width: 20px;
        stroke-linecap: round;
        fill: none;
        stroke-dasharray: 0 $path-length;
        stroke-dashoffset: 0;
        animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1) infinite;
    }
}

@keyframes slide {
    0% {
        transform: translateY(-50px);
    }

    100% {
        transform: translateY(50px);
    }
}

@keyframes escalade {
    0% {
        stroke-dasharray: 0 $path-length;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: $path-length $path-length;
        stroke-dashoffset: 0;
    }

    100% {
        stroke-dasharray: $path-length $path-length;
        stroke-dashoffset: -($path-length - 1);
    }
}</style>