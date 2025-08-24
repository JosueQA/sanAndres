function LayoutGap ({children, flexDirection}) {
    return (
        <span className={`flex ${flexDirection} gap-32`}>
            {children}
        </span>
    )
}

export default LayoutGap