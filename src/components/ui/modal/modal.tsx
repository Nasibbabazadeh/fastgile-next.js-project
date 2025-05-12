export default function Modal(){
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold">Modal Title</h2>
                <p className="mt-2">This is a modal content.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
            </div>
        </div>
    );
}