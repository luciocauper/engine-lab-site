interface CardProps{
    titulo: string;
    descricao: string;
}

export function Card({titulo, descricao}: CardProps){
    return(
        <div className="flex flex-col p-6 mx-8 my-8 rounded-sm bg-green-950 text-white">
            <h2 className="font-bold text-3xl">{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}