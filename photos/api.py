from ninja import Router, Schema, Field
from typing import List, Union
from .models import Album, AlbumList

router = Router()

class ListedAlbumSchema(Schema):
	slug: str
	name: str

class AlbumListSchema(Schema):
	name: str
	albums: List[ListedAlbumSchema]

@router.get('', response=List[AlbumListSchema])
def list_albums(request):
	return AlbumList.objects.all()

class LicenseSchema(Schema):
	identifier: str
	name: str
	url: str

class AlbumEntrySchema(Schema):
	description: str = None
	image: str = Field(..., alias='photo.image')
	exif_data: str = Field(None, alias='photo.exif_data')

class AlbumSchema(Schema):
	slug: str
	name: str
	description: str = None
	location: str = None
	license: Union[LicenseSchema, None]
	entries: List[AlbumEntrySchema]

@router.get("/{slug}", response=AlbumSchema)
def get_album(request, slug):
	return Album.objects.get(slug=slug)
