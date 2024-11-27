import { Show, type Component } from "solid-js";
import useApp from "./hooks/useApp";
import useMasonry from "./hooks/useMasonry";
import Masonry from "./components/ui/Masonry";

const App: Component = () => {
  const { asideShow } = useApp()
  const { data, calcItemHeight, backTop, masonryOption } = useMasonry();


  return (
    <div class="masonry-wrap">
      <Masonry
        virtual={masonryOption().virtual}
        gap={masonryOption().gap}
        padding={masonryOption().padding}
        preloadScreenCount={[masonryOption().topPreloadScreenCount, masonryOption().bottomPreloadScreenCount]}
        itemMinWidth={masonryOption().itemMinWidth}
        maxColumnCount={masonryOption().maxColumnCount}
        minColumnCount={masonryOption().minColumnCount}
        items={data().list}
        calcItemHeight={calcItemHeight}
      >
        {(item) =>
          <article class="card">
            <div class="cover">
              <img src={item.url} alt="图片" />
            </div>
            <Show when={!masonryOption().onlyImage}>
              <div class="body">
                <h3>{item.title}</h3>
              </div>
            </Show>
          </article>
        }
      </Masonry>

      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
        }
        
        .cover {
          display: flex;
          flex: 1;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          background-color: #e3e8f7;
        }
        
        .cover img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .card .body {
          flex-shrink: 0;
          box-sizing: border-box;
          height: 72px;
          padding: 12px;
        }
        
        .card .body h3 {
          margin: 0;
          padding: 0;
          font-weight: bolder;
          font-size: 14px;
        }
        
        .masonry-wrap{
          overflow-x: hidden;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default App;
