import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <button className="m-2" onClick={() => setCount(count + 1)}>
      {count} likes
    </button>
  );
}

export default LikeButton;
