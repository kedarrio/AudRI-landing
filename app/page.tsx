// app/page.tsx
import Hero from '@/sections/Hero/Hero'
import Problem from '@/sections/Problem/Problem'
import HowItWorks from '@/sections/HowItWorks/HowItWorks'
import Platform from '@/sections/Platform/Platform'
import DeepDive from '@/sections/DeepDive/DeepDive'
import Regulatory from '@/sections/Regulatory/Regulatory'
import Comparison from '@/sections/Comparison/Comparison'
import Who from '@/sections/Who/Who'
import Demo from '@/sections/Demo/Demo'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <Platform />
      <DeepDive />
      <Regulatory />
      <Comparison />
      <Who />
      <Demo />
    </main>
  )
}
