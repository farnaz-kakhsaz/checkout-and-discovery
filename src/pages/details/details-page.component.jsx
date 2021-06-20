import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../../context/context-provider";
// Components
import CardItem from "../../components/card/card-item.component";
import SpinnerIcon from "../../components/spinner-icon/spinner-icon.component";
// CSS
import "./details-page.styles.css";

export default function DetailsPage() {
  const { id } = useParams();
  const { value, setValue } = useContext(Context);

  useEffect(() => {
    setValue((prevValue) => ({ ...prevValue, isLoading: true }));
    value
      .getProductDetailsPage(id)
      .then((data) =>
        setValue((prevValue) => ({
          ...prevValue,
          productDetailsPage: data?.data?.product,
          isLoading: false,
        }))
      )
      .catch((error) => {
        setValue((prevValue) => ({ ...prevValue, isLoading: false }));
      });
  }, []);

  return (
    <div className="details-page-container">
      {!value.isLoading ? (
        <div className="details-page-card">
          <CardItem {...value.productDetailsPage} />
        </div>
      ) : (
        <SpinnerIcon />
      )}
    </div>
  );
}
