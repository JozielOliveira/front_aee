import React from 'react'
import { 
  makeStyles,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export function Accordion({ items }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      {items.map((item, index) =>
        <ExpansionPanel elevation={0} key={index} expanded={expanded === index} onChange={handleChange(index)}>
          <ExpansionPanelSummary className={classes.summary} expandIcon={<ExpandMoreIcon />} >
            <Typography>{item.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {item.content}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  summary: {
    padding: 0
  },
  details: {
    padding: '8px 8px 0px'
  }
}))