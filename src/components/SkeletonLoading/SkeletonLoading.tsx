import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./SkeletonLoading.module.css";

export function SkeletonLoading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <section>
        <Skeleton count={5} height={500} baseColor="red" />
      </section>
    </SkeletonTheme>
  );
}
