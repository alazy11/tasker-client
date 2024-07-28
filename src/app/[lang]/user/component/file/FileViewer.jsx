import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import Loading from "@/app/[lang]/component/Loading";

const Loader = ()=>{
    return (
        <div className="h-full w-full fixed top-0 left-0 cont-meet ">
        <div className="flex items-center justify-center h-full w-full">
        <Loading styleClass={''} />
        </div>
        </div>
    )
}


export default function FileViewer({url,setViewer}) {
    const docs = [
        { uri: url }, // Remote file
      ];

      return (
        <div className="react-doc-viewer-style">
            <div className="relative top-0 left-0 w-full h-full">
            <button className="absolute z-50 top-1 left-1 text-black" onClick={(e)=>{
                setViewer(false)
            }}>
            close
        </button>
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
        
        config={{
            loadingRenderer: {
              overrideComponent: Loader,
            },
          }}

        className="bb" />


        {/* <iframe width="100%" height="100%" frameborder="0" src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`} class="ng-star-inserted">
        </iframe> */}

            </div>
        </div>
      );
}