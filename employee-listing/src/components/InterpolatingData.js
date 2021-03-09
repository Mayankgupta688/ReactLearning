export default function InterpolatingData(props) {
    return (
        <div>
            <h1 id="djskfgsd">
                Hello {props.name} {props.age}
            </h1>

            <h2>Value from Object: {props.employee.firstName}</h2>
            <h2>Employee Age from Object: {props.employee.age}</h2>
        </div>
    )
}