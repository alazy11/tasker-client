// CircleLoader

export default function CircleLoader({styleClass}) {

    return (
        <div className={styleClass}>
            <div className="cu-btn__spinner_loader">
                <span className="loading-circle-normal"></span>
            </div>
        </div>
    );

}