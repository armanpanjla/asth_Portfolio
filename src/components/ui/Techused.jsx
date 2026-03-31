// We use { techlist } to "catch" the data sent from the parent
const Techused = ({ techlist }) => {
    // Safety check: if there's no list, don't render anything
    if (!techlist) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {techlist.map((item, index) => (
                <div key={index} 
                     className="border border-white hover:text-black hover:bg-white rounded-full px-3 py-1 text-xs text-white bg-[#111]">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Techused;