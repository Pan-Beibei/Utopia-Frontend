import { createContext, useReducer, useContext, useEffect } from "react";

type statues = "init" | "rejected";

export interface InfoProps {
  [propsName: string]: {
    video?: string;
    title?: string;
    description?: string;
    imgs?: Array<string>;
  };
}

interface StateProps {
  data: Array<InfoProps>;
}

type Action = { type: statues; payload: unknown };

type ContextType = {
  getTextByIndex: (index: number) => InfoProps;
};

const TextContext = createContext<ContextType | null>(null);

const initialState: StateProps = {
  data: [],
};

function reducer(state: StateProps, action: Action) {
  switch (action.type) {
    case "init":
      return {
        ...state,
        data: action.payload as Array<InfoProps>,
      };
    default:
      throw new Error("Unknown action");
  }
}

interface TextProviderProps {
  children: React.ReactNode;
}
function TextProvider({ children }: TextProviderProps) {
  const [{ data }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function loadTextData() {
      try {
        const res = await fetch("./data/data.json");
        const mdata = await res.json();

        dispatch({ type: "init", payload: mdata["data"] });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    }
    loadTextData();
  }, []);

  function getTextByIndex(index: number) {

    return data[index];
  }

  return (
    <TextContext.Provider value={{ getTextByIndex }}>
      {children}
    </TextContext.Provider>
  );
}

function useText() {
  const context = useContext(TextContext);
  if (context === undefined || context === null)
    throw new Error("TextContext was used outside TextProvider");
  return context;
}

export { TextProvider, useText };
