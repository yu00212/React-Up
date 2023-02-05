import { memo } from "react";


const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}

// 再レンダリングされるのはどんな時？
// 1.stateが更新されたコンポーネントは再レンダリング
// 2.propsが更新されたコンポーネントは再レンダリング
// 3.再レンダリングされたコンポーネント配下の子要素は再レンダリング
// アロー関数全体をmemo()で囲むことで、propsが変更されない限りこのコンポーネントは再レンダリングされなくなる

export const ChildArea = memo((props) => {
    const { open } = props;
    console.log("ChildAreaがレンダリングされた!!");

    const data = [...Array(2000).keys()];
    data.forEach(() => {
        console.log("...");
    })
    
    return (
        <>
            { open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                </div>
            ) : null}
        </>
    );
});