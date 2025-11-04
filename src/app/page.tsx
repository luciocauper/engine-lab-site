import { Card } from "@/components/card";
import Carousel from "@/components/carousel";
import { Button } from "@/components/button";
import Image from "next/image";

export default function Home(){
  return (
    <div>
      {/*Seção de apresentação*/}
      <section className="bg-green-700 p-8">

        <div className="center mb-8">
          <Image
            src="/example.svg"
            alt="Imagem company svg from freepik"
            width={850}
            height={150}
            priority
          />
        </div>
        <h1 className="font-syne text-8xl text-white items-center text-center pb-4">Somos Engine Lab</h1>
      
      </section>
      {/*Seção de linhas de pesquisa*/}
      <section className=" bg-sky-500 p-8 center">
        <div>
          <h1 className="text-6xl text-white font-syne mb-24">Áreas de pesquisa</h1>

          <div className="grid gap-16">

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Image
                src="/icons/iot-icon.png"
                alt="Ícone de Internet das Coisas"
                width={100}
                height={100}
                priority
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">Internet das Coisas (IoT)</h2>
                <p className="text-white mt-1 text-base">
                  Pesquisa e desenvolvimento de sistemas inteligentes e conectados.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Image
                src="/icons/pln-icon.png"
                alt="Ícone em forma de cerebro representando processamento de linguage natural"
                width={100}
                height={100}
                priority
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white font-bricolage">Processamento de Linguagem Natural</h2>
                <p className="text-white mt-1 text-base">
                  Algoritmos que conseguem escrever textos de forma natural.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <Image
                src="/icons/computer-vision-icon.png"
                alt="Íconde de visão computacional"
                width={100}
                height={100}
                priority
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">Visão Computacional</h2>
                <p className="text-white mt-1 text-base">
                  Desenvolvimento de algoritmos e sistemas que conseguem ver o ambiente.
                </p>
              </div>
            </div>
            
          </div>

        </div>
      </section>

      <section className="bg-sky-800 p-8 center">
        <div>
          <h2 className="text-5xl text-white">Quer fazer parte do nosso time?</h2>
          <span className="text-white center text-2xl mt-4 font-bricolage">
            <Button text="Saiba Mais"/>
          </span>
        </div>
      </section>
    </div>
  )
}
