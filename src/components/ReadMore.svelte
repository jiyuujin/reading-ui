<script>
    export const content = '自分のキャリアのスタートはIOSネイティブアプリのエンジニアとして。これまでのキャリアの中でIOSネイティブアプリエンジニアとして業務を通じ基礎的なコーディングを取得、WEBを扱うサーバサイドで足りていないと言った環境も相まってJQUERYを始めとしたCSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み込んでいきました。';
    export let isExpanded = false

    const showAll = () => {
        isExpanded = true;
    }

    const close = () => {
        isExpanded = false;
    }
</script>

<main>
    <div class="overview">
        <div class="{
            !isExpanded
                ? 'overview__description__body expanded-text-multiline'
                : 'overview__description__body'
        }">
            {content}
        </div>
        <div style="display: flex; justify-content: flex-end;">
            {#if !isExpanded}
            <button class="btn-read-more" on:click|once={showAll}>
                全文を表示
            </button>
            {/if}
            {#if isExpanded}
            <button class="btn-read-close" on:click|once={close}>
                閉じる
            </button>
            {/if}
        </div>
    </div>
</main>

<style>
	.expanded-text-multiline {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
