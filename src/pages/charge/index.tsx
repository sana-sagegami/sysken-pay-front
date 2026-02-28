import Headers from "../../components/layouts/Header/index";
import { ArrowButton } from "../../components/ui/Button/index";

export default function Charge() {
  return (
    <div>
      <Headers title="シス研Pay" shadow={true} />
      <ArrowButton type="back" />
      <ArrowButton type="next" />
    </div>
  );
}
