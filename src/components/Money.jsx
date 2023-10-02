
export default function Money({ money }) {

    const litlemoney = [];

    for (let i = 0; i < money; i++) {
        litlemoney.push(<img src='/img/billete.png' className="w-10 h-7 p-1" alt='billete' key={i} />);
    }

    return (
        <div className="flex flex-wrap w-28 items-center justify-center">{litlemoney}</div>
    )
}