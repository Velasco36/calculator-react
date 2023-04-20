import { Button } from '../../button';

export function InputDisplay() {
  return (
    <>
      <Button value="AC" />
      <Button value="+/-" />
      <Button value="%" />
      <Button value="/" color="orange" />
      <br />
      <Button value="7" color="gray" />
      <Button value="8" color="gray" />
      <Button value="9" color="gray" />
      <Button value="*" color="orange" />
      <br />
      <Button value="4" color="gray" />
      <Button value="5" color="gray" />
      <Button value="6" color="gray" />
      <Button value="-" color="orange" />
      <br />
      <Button value="1" color="gray" />
      <Button value="2" color="gray" />
      <Button value="3" color="gray" />
      <Button value="+" color="orange" />
      <br />
      <Button value="0" color="gray" zeroOptional />
      <Button value="." color="gray" />
      <Button value="=" color="orange" />
    </>
  );
}
