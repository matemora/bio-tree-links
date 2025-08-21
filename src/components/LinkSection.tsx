import { LinkButton } from "./LinkButton";

export function LinkSection() {
    return (
        <div className="link-section">
            <LinkButton url="https://github.com/matemora">Meu portifolio</LinkButton>
            <LinkButton url="https://debugandoavida.com">Meu website</LinkButton>
            <LinkButton url="https://debugandoavida.notion.site/Material-de-apoio-22c2b3e3756380c183e2dc84515d226c?pvs=74">Material de apoio Javascript e React</LinkButton>
        </div>
    )
}