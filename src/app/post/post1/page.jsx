import Link from "next/link";

export default function Post1(params){
    return(
        <div>
            <h1>POST1</h1>
            <div>
                <figure>
                    <image src="src/app/post/post1/note-147951_1280.png" width={320} height={320} alt="Post-It"/>
                    <figcaption><Link href="/">Go back to home page.</Link></figcaption>
                </figure>
                <p><Link href="/">Voltar...</Link></p>
            </div>
        </div>
    )
}

