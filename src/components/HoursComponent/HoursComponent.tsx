import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import "./HoursComponent.scss";

// Translate
import "../../i18n";
import { useTranslation } from "react-i18next";

interface HoursComponentProps {
  title: string;
}

interface Horaire {
  day: string;
  hour: string;
}

const createHours = (day: string, hour: string): Horaire => {
  return { day, hour };
};

const HoursComponent = (props: HoursComponentProps) => {
  const { title } = props;
  const { t } = useTranslation();

  const horaires: Horaire[] = [
    createHours(t("hours_section.monday"), "11h00 - 19h00"),
    createHours(t("hours_section.tuesday"), "11h00 - 19h00"),
    createHours(t("hours_section.wednesday"), "11h00 - 19h00"),
    createHours(t("hours_section.thursday"), "11h00 - 19h00"),
    createHours(t("hours_section.friday"), "11h00 - 19h00"),
    createHours(t("hours_section.saturday"), "11h00 - 19h00"),
    createHours(t("hours_section.sunday"), "11h00 - 19h00"),
  ];

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>{title}</h4>

      <Table size='small'>
        <TableBody>
          {horaires.map((horaire, index) => (
            <TableRow key={index}>
              <TableCell>{horaire.day}</TableCell>
              <TableCell>{horaire.hour}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HoursComponent;
