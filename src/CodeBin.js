import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import ContextAssignmentParser from './CodeParsers/ContextAssignmentParser';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(1)
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexChild: {
        flex: 1,
        margin: theme.spacing(1)
    },
    disabledTextField: {
        background: 'lightgray'
    }
}));

const parser = new ContextAssignmentParser();

export default function CodeBin() {
    const classes = useStyles();
    const [codeToFormat, setCodeToFormat] = useState('');
    const [formattedCode, setFormattedCode] = useState('');

    const formatCode = code => setFormattedCode(code);

    const onCodeToFormatChanged = newCode => {
        setCodeToFormat(newCode);
        formatCode(parser.parse(newCode));
    }

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.flexContainer}>
                <TextField
                    className={classes.flexChild}
                    label="Code to format"
                    multiline
                    rows={20}
                    variant="outlined"
                    value={codeToFormat}
                    onChange={event => onCodeToFormatChanged(event.target.value)}
                />
                <TextField
                    className={`${classes.flexChild} ${classes.disabledTextField}`}
                    label="Formatted code"
                    multiline
                    rows={20}
                    variant="outlined"
                    disabled
                    value={formattedCode}
                />
            </div>
        </Paper>
    );
}