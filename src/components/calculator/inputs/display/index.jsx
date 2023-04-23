import { Button } from "../../button";

export function InputDisplay({ handleInput }) {
  return (
    <>
      <Button value="AC" handleClick={handleInput} />
      <Button value="+/-" handleClick={handleInput} />
      <Button value="%" handleClick={handleInput} />
      <Button value="/" color="orange" handleClick={handleInput} />
      <br />
      <Button value="7" color="gray" handleClick={handleInput} />
      <Button value="8" color="gray" handleClick={handleInput} />
      <Button value="9" color="gray" handleClick={handleInput} />
      <Button value="*" color="orange" handleClick={handleInput} />
      <br />
      <Button value="4" color="gray" handleClick={handleInput} />
      <Button value="5" color="gray" handleClick={handleInput} />
      <Button value="6" color="gray" handleClick={handleInput} />
      <Button value="-" color="orange" handleClick={handleInput} />
      <br />
      <Button value="1" color="gray" handleClick={handleInput} />
      <Button value="2" color="gray" handleClick={handleInput} />
      <Button value="3" color="gray" handleClick={handleInput} />
      <Button value="+" color="orange" handleClick={handleInput} />
      <br />
      <Button value="0" color="gray" handleClick={handleInput} zeroOptional />
      <Button value="." color="gray" handleClick={handleInput} />
      <Button value="=" color="orange" handleClick={handleInput} />
    </>
  );
}
