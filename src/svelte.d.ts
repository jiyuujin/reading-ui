declare module '*.svelte' {
    interface ComponentOptions {
        target: HTMLElement
        anchor?: HTMLElement | null
        props?: {}
        hydrate?: boolean
        intro?: boolean
    }

    interface Component {
        new (options: ComponentOptions): any

        $set(props: {}): void
        $on(event: string, callback: (event: CustomEvent) => void): void
        $destroy(): void

        render(props?: {}): {
            html: string
            css: { code: string; map: string | null }
            head?: string
        }
    }

    const component: Component
    export default component
}
