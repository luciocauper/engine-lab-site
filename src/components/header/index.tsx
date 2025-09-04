import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Group, Handshake, Info, Newspaper, Science } from "@mui/icons-material";


export function Header(){
    return (
        <header className="flex px-6 py-4 bg-stone-800 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
                <div>
                    <Link href='/'>
                    <Image
                        src="/enginelab-svg.svg"
                        alt="Logo Engine Lab"
                        width={150}
                        height={0}
                        priority
                    />
                    </Link>
                </div>

                <nav>
                    <ul className="flex itens-center justify-center gap-6">
                        <li>
                            <Link href='sobre' >
                                <Info/>
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link href='pesquisa'>
                                <Science/>
                                Pesquisa
                            </Link>
                        </li>

                        <li>
                            <Link href='noticias'>
                                <Newspaper/>
                                Notícias
                            </Link>
                        </li>

                        <li>
                            <Link href='membros'>
                                <Group/>
                                Membros
                            </Link>
                        </li>

                        <li>
                            <Link href='parceiros'>
                                <Handshake/>
                                Parceiros
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}