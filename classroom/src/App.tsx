import { Button } from "./components/button/index"
import styles from "./app.module.css"
import "./global.css"
// import { useMessage } from "./hooks/useMessages"

export function App() {
    // const { show } = useMessage({ age: 18, name: "Leo"}) // Chamando o Rook
    return (
        <div className={styles.container}>
            <Button name="Adicionar"/>
            <span>0</span>
            <Button name="Remover" />
        </div>
    )
}
