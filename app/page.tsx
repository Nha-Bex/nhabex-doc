import type { Metadata } from "next"
import ClientPage from "../components/Home/ClientPage"

export const metadata: Metadata = {
  title: "NhaBex Doc",
  description: "Aprenda como começar com nossa documentação",
}

export default function Home() {
  return (
    <>  
    <ClientPage/>
    </>
  )
}

