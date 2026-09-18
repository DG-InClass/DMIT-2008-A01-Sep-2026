// components/StylingLibrariesList.js

const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]

import { ListGroup } from "react-bootstrap";
// import ListGroup from "react-bootstrap/ListGroup";
//        \_______/
//         default
export default function StylingLibrariesList() {
    return <ListGroup>
        {
            UI_LIBRARY_LIST.map((uiLibrary, index) =>
                <ListGroup.Item key={index}>
                    <a href={uiLibrary.url} target="_blank">
                        {uiLibrary.name}
                    </a>
                </ListGroup.Item>
            )
        }
    </ListGroup>
}
