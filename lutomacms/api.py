from ninja import NinjaAPI

api = NinjaAPI()
api.add_router("/photos", "photos.api.router")
api.add_router("/blog", "cms.api.router")
