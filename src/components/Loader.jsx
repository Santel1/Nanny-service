import { RotatingLines } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

export const Loader = ({ className, width, color }) => {
  return (
    <StyledLoader>
      <div className={className ? className : "loader"}>
        <RotatingLines
          strokeColor={color}
          strokeWidth="5"
          animationDuration="0.75"
          width={width}
          visible={true}
        />
      </div>
    </StyledLoader>
  );
};
