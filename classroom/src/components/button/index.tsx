import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {  // Também é possível para métodos para o componente
    name: string
}

// O parâmetro do componente pode ser usado tanto como propreidade e tipagem normal, como também com desestrturação
export function Button(/*props:*/ { name, ...rest }: Props) {
    return <button className={styles.container} { ...rest }>
        <span>
            {name}
        </span>
    </button>
}
