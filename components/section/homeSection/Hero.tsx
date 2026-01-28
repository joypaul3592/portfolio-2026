import Image from "next/image";

export default function Hero() {
  return (
    <header className="sm:p-10 p-5 flex items-center border-b">
      <div className="grid lg:grid-cols-5 gap-5 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / 2026
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Joy <span className="text-muted-foreground">Paul</span>
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Frontend Developer crafting digital experiences at the
              intersection of
              <span className="text-foreground"> design</span>,
              <span className="text-foreground"> technology</span>, and
              <span className="text-foreground"> user experience</span>.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mt-1"></div>
              Barisal, Bangladesh
            </div>
          </div>
        </div>
        {/* Right side - Animated Portrait Card */}
        <div className="lg:col-span-2 flex flex-col justify-center sm:mt-8 mt-5 lg:mt-0 sm:pl-4">
          <div className="relative rounded border border-border bg-card/50 backdrop-blur-sm p-1 w-fit">
            <div
              aria-hidden="true"
              className="group relative mx-auto  overflow-hidden"
            >
              {/* Frame with corner decorations */}
              <div className="aspect-[9/3] absolute inset-0 sm:-top-24 -top-36 z-10 m-auto h-12 border border-emerald-300/15 bg-emerald-300/15 overflow-hidden">
                <span className="absolute -left-px -top-px block size-2.5 rounded-tl border-l-[1.5px] border-t-[1.5px] border-emerald-300/70 scale-125 blur-[3px]"></span>
                <span className="absolute -right-px -top-px block size-2.5 rounded-tr border-r-[1.5px] border-t-[1.5px] border-emerald-300/70 scale-125 blur-[3px]"></span>
                <span className="absolute -bottom-px -left-px block size-2.5 rounded-bl border-b-[1.5px] border-l-[1.5px] border-emerald-300/70 scale-125 blur-[3px]"></span>
                <span className="absolute -bottom-px -right-px block size-2.5 rounded-br border-b-[1.5px] border-r-[1.5px] border-emerald-300/70 scale-125 blur-[3px]"></span>

                {/* Solid corners */}
                <span className="absolute -left-px -top-px block size-2.5 rounded-tl border-l-[1.5px] border-t-[1.5px] border-emerald-300 z-10"></span>
                <span className="absolute -right-px -top-px block size-2.5 rounded-tr border-r-[1.5px] border-t-[1.5px] border-emerald-300 z-10"></span>
                <span className="absolute -bottom-px -left-px block size-2.5 rounded-bl border-b-[1.5px] border-l-[1.5px] border-emerald-300 z-10"></span>
                <span className="absolute -bottom-px -right-px block size-2.5 rounded-br border-b-[1.5px] border-r-[1.5px] border-emerald-300 z-10"></span>

                {/* Scanning animation inside frame */}
                <div className="absolute inset-0 z-20 animate-scan">
                  <div className="absolute inset-x-0 m-auto h-6 bg-emerald-500 blur-xl"></div>
                </div>
              </div>

              {/* Portrait image - Square */}
              <div className="aspect-square bg-border/50 transition-opacity rounded-xs overflow-hidden relative z-5 ">
                <Image
                  src="/img/hero/joy2.png"
                  alt="Joy Paul - Frontend Developer"
                  width={450}
                  height={450}
                  className="size-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
