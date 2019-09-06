import Card from "components/UI/Card";

import styles from "./index.scss";

type Props = {};

const Index = ({  }: Props) => (
  <div className={styles.view}>
    <Card description="Home" icon="cb-home"></Card>
    <Card description="Editor" icon="cb-editor"></Card>
    <Card description="Book" icon="cb-book"></Card>
    <Card description="Collection" icon="cb-collection"></Card>
    <Card description="Price" icon="cb-price"></Card>
    <Card description="Credit Card" icon="cb-credit-card"></Card>
    <Card description="Contacts" icon="cb-contacts"></Card>
    <Card description="License" icon="cb-license"></Card>
    <Card description="Plus" icon="cb-plus"></Card>
    <Card description="Check" icon="cb-check"></Card>
    <Card description="Empty Check" icon="cb-empty-check"></Card>
    <Card description="Cross" icon="cb-cross"></Card>
  </div>
);

export default Index;
