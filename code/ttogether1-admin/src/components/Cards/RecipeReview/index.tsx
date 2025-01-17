import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardHeader from '../../dashboard/Common/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 400
	},
	media: {
		height: 194
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	},
	flexGrow: {
		flex: '1 1 auto'
	}
}));

export interface IRecipeReviewCardProps {}

const RecipeReviewCard: React.FC<IRecipeReviewCardProps> = (props) => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const classes = useStyles();

	return (
		<div>
			<Card className={classes.card}>
				<CardHeader
					avatar={
						<Avatar aria-label="Recipe" className={classes.avatar}>
							R
						</Avatar>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					className={classes.media}
					image="https://via.placeholder.com/500x330"
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography variant="caption" component="p">
						This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
						Add 1 cup of frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="Add to favorites">
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label="Share">
						<ShareIcon />
					</IconButton>
					<div className={classes.flexGrow} />
					<IconButton
						className={classnames(classes.expand, {
							[classes.expandOpen]: expanded
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="Show more"
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} unmountOnExit>
					<CardContent>
						<Typography paragraph variant="body2">
							Method:
						</Typography>
						<Typography>
							Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
							minutes.
						</Typography>
						<Typography>
							Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat.
							Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to
							8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in
							the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
							stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and
							remaining 4 1/2 cups chicken broth; bring to a boil.
						</Typography>
						<Typography>
							Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
							without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
							medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again
							without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more.
							(Discard any mussels that don’t open.)
						</Typography>
						<Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

RecipeReviewCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default RecipeReviewCard;
