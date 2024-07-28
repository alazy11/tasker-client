

export default function Loading({styleClass}) {
    return (
        <div className={styleClass}>
            <div className="cu-btn__spinner_loader">
                <div className="cu-btn__bounce1"></div>
                <div className="cu-btn__bounce2"></div>
                <div className="cu-btn__bounce3"></div>
            </div>
        </div>
    );
}