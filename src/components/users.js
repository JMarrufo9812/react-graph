import React from "react";
import { Query } from "react-apollo";
import { USERS_QUERY } from "../querys";
import {
  lighten,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";



function Users () {

  const useStyles = makeStyles({
    table: {
      minWidth: 800
    }
  });
  
  const classes = useStyles();

return(
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;

      return (
        <React.Fragment>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Telefono</TableCell>
                <TableCell align="center">Puesto Dentro de la empresa</TableCell>
                <TableCell align="center">Ciudad</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.allUsers.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.lastName}</TableCell>
                  <TableCell align="right">{item.phones}</TableCell>
                  <TableCell align="center">{item.jobTittle}</TableCell>
                  <TableCell align="center">{item.country}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </React.Fragment>
      );
    }}
  </Query>
)
};

export default Users;
