interface Props {
    username: string,
    location: string,
    like: boolean, /* Verificar se o usuário curtiu ou não a mensagem (valor natural: false) */
    save: boolean, /* Verificar se a postagem foi arquivada (símbolo mais a direita na fileira com os botões de like, comentario e envio) (valor natural: false) */
}

export default function Postagem(props: Props) {
    
    function Like() {
        if (props.like) {
            return <img src="images/liked.png" alt="Like" className='h-6'/>;
        } else {
            return <img src="images/like.png" alt="Like" className='h-6'/>;
        }
    }


    return (

        <div className="mb-12 m-5">
            <div className='flex'>
                <div className='mb-6 flex items-center'>
                    <img src="/images/profile.jpg" alt="Profile" className='h-16 mr-2'/>
                    <div>
                        <span className='text-sm text-gray-950'>{props.username}<button className="ml-36 text-xl font-medium">...</button></span>
                        <br />
                        <span className='text-xs text-zinc-400'>{props.location}</span>
                    </div>
                </div>
            </div>

            <div className='mb-6'>
                <img src="/images/post.jpg" alt="" />
            </div>

            <div className='mb-3'>
                <div className='flex items-center'>
                    <button  className='mr-3'>{Like()}</button>
                    <button className='mr-3'><img src="images/send.png" alt="comentario" className='h-6'/></button>
                    <button className="mr-44"><img src="images/comment.png" alt="Comentário" className='h-6'/></button>
                    <button><img src="images/arquivar.png" alt="Arquivar" className='h-7'/></button>
                </div>
           </div>

            <div className='mb-2'>
                <span>❤ 11 likes</span>
            </div>

            <div>
                <span><strong>username </strong> Description</span> <br />
                <span className='text-blue-400'>#hashtag #design #creative</span>
            </div>
        </div>
    )
}