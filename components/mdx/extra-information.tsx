export const ExtraInformation = ({tag,readTime}:{tag :string , readTime : string}) => {
    return (
        <div className={"flex prose-p:text-[15px] items-center justify-center prose-p:font-medium gap-4"}>
            <p>{tag}</p>
            <p>•</p>
            <p>
                {readTime}
            </p>
        </div>
    )
}