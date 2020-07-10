import { User } from "../../models/User";
import { makeStyles, Paper, Typography, Button, ButtonGroup, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Checkbox, TextField } from "@material-ui/core";
import { NewFToyList } from "../../models/NewFToyList";
import React, { useState } from "react";
import { Redirect } from "react-router";

export interface IQuestionaireProps {
    authUser: User;
    errorMessage: string;
    saveFQuestionaireAction: (toyList: NewFToyList) => void;
}

const useStyles = makeStyles((theme)=> ({

}));

function QuestionaireComponent(props: IQuestionaireProps){
    //set styles
    const classes = useStyles();

    //declare params for female toys
    const [color, setColor] = useState('');
    const [type, setType] = useState('');
    const [vibration, setVibration] = useState('');
    const [material, setMaterial] = useState([]);

    //declare params for male toys

    //declare params common to both male and female toys
    const [username, setUsername] = useState('');
    const [anal, setAnal] = useState(false);
    const [analMaterial, setAnalMaterial] = useState([]);
    const [analType, setAnalType] = useState('');
    const [accessories, setAccessories] = useState([]);
    const [bdsm, setBdsm] = useState(false);
    const [bdsmType, setBdsmType] = useState([]);
    const [question, setQuestion] = useState('');
    //set params for toys
    //setUsername(props.authUser.username);
    let updateFormField = (e:any) =>{
		switch (e.target.id){
			//female 
			case 'color':
				setColor(e.target.value);
				break;
			case 'type':
				setType(e.target.value);
				break;
			case 'vibration':
				setVibration(e.target.value);
				break;
			case 'material':
				setMaterial(material => material.concat(e.target.value));
                break;
            //male 

            //common
            case 'anal':
                setAnal(e.target.value); 
                break;
            case 'analType': 
                setAnal(e.target.value);
				break;
			case 'analMaterial':
				setAnalMaterial(analMaterial => analMaterial.concat(e.target.value));
				break;
			case 'setAnalType':
				setAnalType(e.target.value);
				break;
			case 'accessories':
				setAccessories(accessories => accessories.concat(e.target.value));
				break;
			case 'bdsm':
				setBdsm(e.target.value);
				break;
            case 'bdsmType':
                setBdsmType(bdsmType => bdsmType.concat(e.target.value)); 
                break;   
            default:
				console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`);
		}		
    }
    
    let saveFQuestionaire = async () => {
        props.saveFQuestionaireAction(new NewFToyList(username, color, type, vibration, material, anal, analMaterial, analType, accessories, bdsm, bdsmType))
    }

    let changeQuestion = (name: any) =>{ 
        setQuestion(name.target.value);
    }

    return(
        //!props.authUser ? <Redirect to="/login"/> :
        <>
            <Paper>
                <Typography align="center" variant="h2">Are you looking for toys for men or women?</Typography> 
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button onClick={changeQuestion} value='women'>Women's Toys</Button>
                    <Button onClick={changeQuestion} value='men'>Men's Toys</Button>
                </ButtonGroup>
                {/* {question == 'women' ? 
                <> */}
                    <Typography variant='h3'>So you want women's toys?</Typography>
                    <FormControl margin="normal" fullWidth>
                        <FormLabel >Wonderful! Are you looking for internal or external thrills?</FormLabel>
                        <RadioGroup aria-label="toy-type"  id='type' onChange={updateFormField}>
                            <FormControlLabel value="internal" control={<Radio />} label="Put it in me baby!" />
                            <FormControlLabel value="external" control={<Radio />} label="Rub it all over me!" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <FormLabel >Are you looking for a vibrator?</FormLabel>
                        <RadioGroup aria-label="vibrator"  id='vibration' onChange={updateFormField}>
                            <FormControlLabel value="strongBuzz" control={<Radio />} label="Yes I like it strong and buzzy" />
                            <FormControlLabel value="strongThud" control={<Radio />} label="Yaaass thuddy vibratorssss" />
                            <FormControlLabel value="light" control={<Radio />} label="Yes but light vibrators I'm sensitive" />
                            <FormControlLabel value="rabbit" control={<Radio />} label="Gimme that rabbit goodness!" />
                            <FormControlLabel value="none" control={<Radio />} label="Nope" />
                        </RadioGroup>
                        <FormControl margin="normal" fullWidth>
                        <FormLabel >We recommend silicone, metal, or glass toys as the safest materials. Do you know if you'd like a harder or softer material?</FormLabel>
                        <RadioGroup aria-label="material"  id='material' onChange={updateFormField}>
                            <FormControlLabel value="strongBuzz" control={<Checkbox />} label="I love glass and it's temperature change capabilities" />
                            <FormControlLabel value="strongThud" control={<Checkbox />} label="I like firm silicone" />
                            <FormControlLabel value="light" control={<Checkbox />} label="I like medium silicone" />
                            <FormControlLabel value="rabbit" control={<Checkbox />} label="I like soft silicone" />
                            <FormControlLabel value="none" control={<Checkbox />} label="I want metal" />
                            <FormControlLabel value="rabbit" control={<Checkbox />} label="I don't mind less safe materials like jelly or TPR" />
            <FormControlLabel  control={<Checkbox  value={<TextField />} />}label="Other:" />
                        </RadioGroup>
                    </FormControl>
                    </FormControl>
                {/* </>
                : question =='men'?
                <> */}
                    <Typography>So you want men's toys</Typography>
                {/* </>
                :
                <></> 

                }*/}
                
            </Paper> 
        </>
    )
    
}

export default QuestionaireComponent;