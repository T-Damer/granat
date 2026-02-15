import { PropsWithChildren } from 'react'

export default function LiquidGlass({ children }: PropsWithChildren) {
  return (
    <>
      <div
        style={{
          boxShadow:
            '0 6px 6px var(--c-black-20), 0 0 20px var(--c-black-10)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
        }}
        className="relative flex h-64 w-80 cursor-pointer overflow-hidden rounded-md"
      >
        <div
          className="absolute inset-0 isolate z-0 overflow-hidden backdrop-blur-xs"
          style={{ filter: 'url(#glass-distortion)' }}
        />
        <div className="absolute inset-0 z-1 bg-white-25" />
        <div
          className="absolute inset-0 z-2 overflow-hidden"
          style={{
            boxShadow:
              'inset 2px 2px 1px 0 var(--c-white-31), inset -1px -1px 1px 1px var(--c-white-31)',
          }}
        />
        <div className="z-3 flex-col gap-4 rounded-md p-4 drop-shadow-2xl">
          {children}
        </div>
      </div>

      <svg className="hidden">
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lighting-color="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  )
}
