import { useState } from "react";
import Button from "src/components/Button";
import ItemList from "src/components/ItemList";
import { SourceType } from "src/types";
import "./App.css";

interface Page {
  type: SourceType;
  label: string;
}

const pages: Page[] = [
  {
    type: SourceType.Movie,
    label: "Movies",
  },
  {
    type: SourceType.Character,
    label: "Characters",
  },
  {
    type: SourceType.Quote,
    label: "Quotes",
  },
];

function App() {
  const [activePageType, setActivePageType] = useState(SourceType.Movie);

  return (
    <>
      <header className="space-x-4">
        {pages.map((page) => (
          <Button
            key={page.type}
            disabled={page.type === activePageType}
            onClick={() => setActivePageType(page.type)}
          >
            {page.label}
          </Button>
        ))}
      </header>
      <section className="mt-8 border border-solid w-[calc(100vw-200px)] h-[calc(100vh-200px)] overflow-auto">
        <ItemList type={activePageType} />
      </section>
    </>
  );
}

export default App;
