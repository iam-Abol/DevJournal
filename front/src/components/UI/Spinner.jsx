export default function Spinner() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* <span className="animate-spin   rounded-full h-16 w-16 border-x-4 border-black mb-4"></span> */}
        {/* <p>Loading . . .</p> */}
        <div className="flex gap-1 items-center font-bold">
          <span class=" text-xl rounded-full animate-bounce  [animation-delay:-1s]">
            L
          </span>
          <span class="  text-xl rounded-full animate-bounce  [animation-delay:-0.9s]">
            O
          </span>
          <span class=" text-xl rounded-full animate-bounce  [animation-delay:-0.8s]">
            A
          </span>
          <span class="text-xl rounded-full animate-bounce [animation-delay:-0.7s]">
            D
          </span>
          <span class="text-xl rounded-full animate-bounce [animation-delay:-0.6s]">
            I
          </span>
          <span class="text-xl rounded-full animate-bounce [animation-delay:-0.5s]">
            N
          </span>
          <span class="text-xl rounded-full animate-bounce [animation-delay:-0.4s]">
            G
          </span>
          <span class="text-xl h-2/5 rounded-full animate-bounce [animation-delay:-0.3s]">
            .
          </span>
          <span class="text-xl  rounded-full animate-bounce [animation-delay:-0.2s]">
            .
          </span>
          <span class="text-xl rounded-full animate-bounce [animation-delay:-0.1s]">
            .
          </span>
        </div>
      </div>
    </div>
  );
}
