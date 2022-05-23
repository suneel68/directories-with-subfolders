import "./styles.css";

const directories = {
  folder1: {
    name: "folder1",
    expanded: true
  },
  folder2: {
    name: "fodler2",
    expanded: true,
    children: [
      {
        expanded: true,
        name: "folder21"
      },
      {
        expanded: false,
        name: "folder22"
      }
    ]
  }
};

const FolderChildComp = ({ name, isExpanded }) => {
  return (
    <div>
      {isExpanded ? <button>-</button> : <button>+</button>}
      {name}
    </div>
  );
};

export const FolderComp = ({ name, isExpanded, childFolders }) => {
  return (
    <div>
      {!childFolders ? (
        <FolderChildComp name={name} isExpanded={isExpanded} />
      ) : (
        <div>
          {childFolders.map((item) => (
            <FolderChildComp name={item.name} isExpanded={item.expanded} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const folders = Object.keys(directories);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <>
        {folders.map((key) => {
          if (directories[key]["children"]) {
            return (
              <div>
                <FolderChildComp
                  name={directories[key]["name"]}
                  isExpanded={directories[key]["expanded"]}
                />
                <FolderComp
                  name={directories[key]["name"]}
                  isExpanded={directories[key]["expanded"]}
                  childFolders={directories[key]["children"]}
                />
              </div>
            );
          }
          return (
            <FolderChildComp
              name={directories[key]["name"]}
              isExpanded={directories[key]["expanded"]}
            />
          );
        })}
      </>
    </div>
  );
}
