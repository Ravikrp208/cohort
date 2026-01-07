import React from 'react'

const Color = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2b003f] via-[#6a006f] to-[#ff2f92]">
      
      {/* Glow blob 1 */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[150px] opacity-40"> Ravi </div>

      {/* Glow blob 2 */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-40">Ravi</div>

      {/* Glow blob 3 */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-500 rounded-full blur-[160px] opacity-30">AE</div>

      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-16 py-10">
          <h1 className="text-white text-5xl font-bold tracking-widest">
            
        Ravi kumar pandit
          </h1>
        </div>
      </div>


        
    </div>
  )
}

export default Color